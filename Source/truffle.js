const DocumentStorage = artifacts.require("DocumentStorage");

contract("DocumentStorage", accounts => {
  it("stores and retrieves an IPFS hash", async () => {
    const storage = await DocumentStorage.deployed();
    
    await storage.storeHash("file123", "QmTestHash");
    const storedHash = await storage.getHash("file123");

    assert.equal(storedHash, "QmTestHash", "The IPFS hash was not stored correctly.");
  });
});
