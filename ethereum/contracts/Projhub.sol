pragma solidity >=0.4.17;
pragma experimental ABIEncoderV2;

contract Projhub {
    // data types
    struct Proj {
        string name;
        uint256 id;
        string timestamp;
        string description;
        string[] fileHashes;
        string[] fileNames;
    }

    struct User {
        uint256 uid;
        address owner;
        string name;
        string email;
        mapping(uint256 => Proj) projects;
        uint256 projCount;
    }

    address public manager;
    User[] public users;
    mapping(address => bool) public isUser;
    uint256 public userCount;

    // methods
    constructor() public {
        manager = msg.sender;
        userCount = 0;
    }

    function createUser(string memory name, string memory email) public {
        require(!isUser[msg.sender], "Already a user");
        User memory newUser = User({
            uid: userCount,
            owner: msg.sender,
            name: name,
            email: email,
            projCount: 0
        });
        users.push(newUser);
        userCount++;
        isUser[msg.sender] = true;
    }

    function createProject(
        uint256 userIndex,
        string name,
        string timestamp,
        string description,
        string[] fileHashes,
        string[] fileNames
    ) public {
        require(isUser[msg.sender], "Create an account");
        User storage currUser = users[userIndex];
        uint256 projCount = currUser.projCount;
        Proj memory newProj = Proj({
            id: projCount,
            name: name,
            timestamp: timestamp,
            description: description,
            fileHashes: fileHashes,
            fileNames: fileNames
        });

        currUser.projects[projCount] = newProj;
        currUser.projCount = projCount + 1;
    }

    function getUserDetails(address uadd)
        public
        view
        returns (
            uint256 uid,
            address owner,
            string memory name,
            string memory email,
            uint256 projCount
        )
    {
        require(isUser[uadd], "Not a user");
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].owner == uadd) {
                User storage currUser = users[i];
                return (
                    currUser.uid,
                    currUser.owner,
                    currUser.name,
                    currUser.email,
                    currUser.projCount
                );
            }
        }
    }

    function getProjectDetails(address uadd, uint256 projIndex)
        public
        view
        returns (
            uint256 id,
            string memory,
            string memory,
            string memory,
            string[] memory,
            string[] memory
        )
    {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].owner == uadd) {
                User storage user = users[i];
                return (
                    user.projects[projIndex].id,
                    user.projects[projIndex].name,
                    user.projects[projIndex].timestamp,
                    user.projects[projIndex].description,
                    user.projects[projIndex].fileHashes,
                    user.projects[projIndex].fileNames
                );
            }
        }
    }

}
