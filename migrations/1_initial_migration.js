const BEP20 = artifacts.require("BEP20");

module.exports = function (deployer) {
  const wallet1 = "0x694E0712a92aFd35EA2c9dd3790dC798bA6E99Bb";
  const wallet2 = "0x75D702645c4fe364fc32dA9aB6B38dAbeEdA6Cb5";
  const wallet3 = "0xe5d9BF0e93587270aF0d333D56788A05acF45224";
  const wallet4 = "0xa44D1290108013Dc9C8afeea513048578f9CC0D9";
  const wallet5 = "0xa2bD35656E8BFC0d72911d18a0a594905255C24C";
  const wallet6 = "0x14881c68Bf980f400c843302aa912955fe579120";
  deployer.deploy(BEP20, wallet1, wallet2, wallet3, wallet4, wallet5, wallet6, {
    from: "0x0061e70f0Cea9f4f61Fcd0C42Fa4Dba7b7590cC7",
  });
};
