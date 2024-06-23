pragma solidity >=0.4.22 <0.9.0;

contract DocumentStorage {
    mapping(string => string) public ipfsHashes;

    // Store IPFS hash
    function storeHash(string memory _fileId, string memory _ipfsHash) public {
        ipfsHashes[_fileId] = _ipfsHash;
    }

    // Retrieve IPFS hash
    function getHash(string memory _fileId) public view returns (string memory) {
        return ipfsHashes[_fileId];
    }
}
