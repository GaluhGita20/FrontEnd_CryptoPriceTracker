//SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Election {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    uint256 public candidatesCount;

    mapping(uint256 => Candidate) public candidates;

    mapping(address => bool) public votedornot;

    event electionupdated(uint256 indexed _candidateId);

    constructor() {
        addCandidate("Etherum");
        addCandidate("Bitcoin");
        addCandidate("Litecoin");
        addCandidate("Binance USD");
        addCandidate("XRP");


    }

    function addCandidate(string memory name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    function vote(uint256 _candidateId) public {
        require(!votedornot[msg.sender]);

        require(_candidateId > 0 && _candidateId <= candidatesCount);

        candidates[_candidateId].voteCount++;

        votedornot[msg.sender] = true;

        emit electionupdated(_candidateId);
    }
}
