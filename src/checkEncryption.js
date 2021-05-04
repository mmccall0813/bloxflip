module.exports = function(encryptionKey){
  const crypto = require("crypto");
  const aes256 = require("aes256");
  const fs = require("fs");
  if(!fs.existsSync("./encryption.key")){
  console.log("No encryption key found... Generating a new one...")
  
  var newKey = crypto.randomBytes(128).toString("hex")
  fs.writeFileSync("./encryption.key", newKey);
  
  console.log("Created new key file...")
  
  if(!fs.existsSync("./.data/")) fs.mkdirSync("./.data");
  fs.writeFileSync("./.data/test.user", aes256.encrypt(newKey, "Testing File."))
  console.log("Creating new encryption test file...")
}else{
  console.log("Encryption key exists...");
}

console.log("Checking encryption test file...")

encryptionKey=fs.readFileSync("./encryption.key").toString();
if(!fs.existsSync("./.data/test.user")){
  if(!fs.existsSync("./.data/")) fs.mkdirSync("./.data");
  fs.writeFileSync("./.data/test.user", aes256.encrypt(encryptionKey, "Testing File."));
}

if(aes256.decrypt(encryptionKey, fs.readFileSync("./.data/test.user").toString()) !== "Testing File."){
  console.log("FATAL: Encryption key malfunction! All user files will now be deleted, as the data is useless without the key.");
  var path = require("path");
  var directory = "./.data"
  fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
    
  var newKey = crypto.randomBytes(128).toString("hex")
  fs.writeFileSync("./encryption.key", newKey);
  
  console.log("Created new key file")
  
  fs.writeFileSync("./.data/test.user", aes256.encrypt(newKey, "Testing File."))
  console.log("Creating new encryption test file...")
    
})
}else{
  console.log("Encryption test file working!");
}
  return encryptionKey;
  
}