const BEP20 = artifacts.require("BEP20");
const { time } = require("@openzeppelin/test-helpers");

const day = 24 * 60 * 60;
const month = 31 * day;
let icoNumber = 0;

contract("BEP20", (accounts) => {
  beforeEach(async function () {
    const bep = await BEP20.deployed();
    const endOfICO = await bep.getEndOfICO();
    icoNumber = endOfICO.toNumber();
  });

  it("Test1 : The Balance of the owner should be 0", async () => {
    const bep = await BEP20.deployed();
    const balance = await bep.balanceOf(accounts[0]);

    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });

  /*
   *  Normal Usage from the END of ICO to 24 M after
   */

  it("Test2 : mint with respect of Cliff and Vesting", async () => {
    const bep = await BEP20.deployed();

    // 1 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 1 * month);
    await bep.mint(1);

    // 2 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 2 * month);
    await bep.mint(1);

    // 3 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 3 * month);
    await bep.mint(1);
    await bep.mint(3);

    // 4 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 4 * month);
    await bep.mint(1);
    await bep.mint(3);
    await bep.mint(4);

    // 5 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 5 * month);
    await bep.mint(3);
    await bep.mint(4);

    // 6 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 6 * month);
    await bep.mint(3);
    await bep.mint(4);
    await bep.mint(6);

    // 7 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 7 * month);
    await bep.mint(3);
    await bep.mint(4);
    await bep.mint(6);

    // 8 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 8 * month);
    await bep.mint(3);
    await bep.mint(4);
    await bep.mint(6);

    // 9 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 9 * month);
    await bep.mint(4);
    await bep.mint(6);

    // 10 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 10 * month);
    await bep.mint(4);
    await bep.mint(6);

    // 11 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 11 * month);
    await bep.mint(4);
    await bep.mint(6);

    // 12 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 12 * month);
    await bep.mint(4);
    await bep.mint(6);

    // 13 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 13 * month);
    await bep.mint(4);
    await bep.mint(6);

    // 14 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 14 * month);
    await bep.mint(4);
    await bep.mint(6);

    // 15 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 15 * month);
    await bep.mint(4);
    await bep.mint(6);

    // 16 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 16 * month);
    await bep.mint(6);

    // 17 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 17 * month);
    await bep.mint(6);

    // 18 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 18 * month);
    await bep.mint(6);

    // 19 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 19 * month);
    await bep.mint(6);

    // 20 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 20 * month);
    await bep.mint(6);

    // 21 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 21 * month);
    await bep.mint(6);

    // 22 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 22 * month);
    await bep.mint(6);

    // 23 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 23 * month);
    await bep.mint(6);

    // 23 M and 1 S from End of ICO
    await time.increaseTo(icoNumber + 24 * month);
    // End of vesting

    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    console.log(
      "Balance of Reserve at the End of ICO                                 : " +
        wallet1.valueOf()
    );
    console.log(
      "Balance of Associates and Teams & Advisors at the End of ICO         : " +
        wallet2.valueOf()
    );
    console.log(
      "Balance of Platform, Private Sale and Marketing at the End of ICO    : " +
        wallet3.valueOf()
    );
    console.log(
      "Balance of ICO round 1 at the End of ICO                             : " +
        wallet4.valueOf()
    );
    console.log(
      "Balance of ICO round 2 at the End of ICO                             : " +
        wallet5.valueOf()
    );
    console.log(
      "Balance of ICO round 3 at the End of ICO                             : " +
        wallet6.valueOf()
    );
  });
});
