const BEP20 = artifacts.require("BEP20");

module.exports = function (deployer) {
  const wallet1 = "0x929d7aB60437eEC0C930571Db826Fa6f60C51693";
  const wallet2 = "0x79c5112E803dC50B4399f6E0bA6304a511e402A6";
  const wallet3 = "0x1dA99616c363C0693B3DD421BE7C9CA3293Aa252";
  const wallet4 = "0xc4BD9b86cF1EA6C8fb99a267E18Fd2dcC3729a3D";
  const wallet5 = "0x701ADcA3C87217DaD86dE130918232e58BA91e0F";
  const wallet6 = "0xC53D67d096Ef25276F1390F867BF050f1c6D0394";
  deployer.deploy(BEP20, wallet1, wallet2, wallet3, wallet4, wallet5, wallet6, {
    from: "0xB6E389c02DCedC7c703c7e4DEd0e0f877b26FEE1",
  });
};
