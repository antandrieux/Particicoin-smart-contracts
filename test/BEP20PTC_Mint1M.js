const BEP20 = artifacts.require("BEP20");
const { time, expectRevert } = require("@openzeppelin/test-helpers");

const day = 24 * 60 * 60;
const month = 31 * day;
let icoNumber = 0;

contract("BEP20 1M", (accounts) => {
  beforeEach(async function () {
    const bep = await BEP20.deployed();
    const endOfICO = await bep.getEndOfICO();
    icoNumber = endOfICO.toNumber();
  });

  it("Test1 : The Balance of the owner should be 0", async () => {
    const bep = await BEP20.deployed();
    const balance = await bep.balanceOf(accounts[0]);
    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    assert.equal(
      wallet1.valueOf(),
      367500008 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet2.valueOf(),
      90000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet3.valueOf(),
      424999992 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet4.valueOf(),
      112500000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet5.valueOf(),
      200000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet6.valueOf(),
      1000000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });

  it("Test2 : try to mint 2 days after deployment", async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(icoNumber + day);
    await expectRevert(bep.mint(1), "BEP20: too early for minting request");

    const balance = await bep.balanceOf(accounts[0]);
    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    assert.equal(
      wallet1.valueOf(),
      367500008 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet2.valueOf(),
      90000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet3.valueOf(),
      424999992 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet4.valueOf(),
      112500000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet5.valueOf(),
      200000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet6.valueOf(),
      1000000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });

  it("Test3 : try to mint after 24 days", async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(icoNumber + 24 * day);
    await expectRevert(bep.mint(1), "BEP20: too early for minting request");

    const balance = await bep.balanceOf(accounts[0]);
    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    assert.equal(
      wallet1.valueOf(),
      367500008 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet2.valueOf(),
      90000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet3.valueOf(),
      424999992 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet4.valueOf(),
      112500000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet5.valueOf(),
      200000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet6.valueOf(),
      1000000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });

  it("Test4 : try to mint after 1 month ", async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(icoNumber + 1 * month);
    await bep.mint(1);

    const balance = await bep.balanceOf(accounts[0]);
    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    assert.equal(
      wallet1.valueOf(),
      367500008 * 10 ** 9,
      "The Balance W1 should be"
    );
    assert.equal(
      wallet2.valueOf(),
      90000000 * 10 ** 9,
      "The Balance W2 should be"
    );
    assert.equal(
      wallet3.valueOf(),
      424999992 * 10 ** 9,
      "The Balance W3 should be"
    );
    assert.equal(
      wallet4.valueOf(),
      112500000 * 10 ** 9,
      "The Balance W4 should be"
    );
    assert.equal(
      wallet5.valueOf(),
      200000000 * 10 ** 9 + 200000000 * 10 ** 9,
      "The Balance W5 should be"
    );
    assert.equal(
      wallet6.valueOf(),
      1000000000 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });

  it("Test5 : try a second mint in the same month", async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(icoNumber + 1 * month + 3 * day);
    await expectRevert(bep.mint(1), "BEP20: too early for minting request");

    const balance = await bep.balanceOf(accounts[0]);
    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    assert.equal(
      wallet1.valueOf(),
      367500008 * 10 ** 9,
      "The Balance W1 should be"
    );
    assert.equal(
      wallet2.valueOf(),
      90000000 * 10 ** 9,
      "The Balance W2 should be"
    );
    assert.equal(
      wallet3.valueOf(),
      424999992 * 10 ** 9,
      "The Balance W3 should be"
    );
    assert.equal(
      wallet4.valueOf(),
      112500000 * 10 ** 9,
      "The Balance W4 should be"
    );
    assert.equal(
      wallet5.valueOf(),
      200000000 * 10 ** 9 + 200000000 * 10 ** 9,
      "The Balance W5 should be"
    );
    assert.equal(
      wallet6.valueOf(),
      1000000000 * 10 ** 9,
      "The Balance W6 should be"
    );
    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });

  it("Test6 : try to mint after 2 month ", async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(icoNumber + 2 * month);
    await bep.mint(1);

    const balance = await bep.balanceOf(accounts[0]);
    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    assert.equal(
      wallet1.valueOf(),
      367500008 * 10 ** 9,
      "The Balance should be  0"
    );
    assert.equal(
      wallet2.valueOf(),
      90000000 * 10 ** 9,
      "The Balance W2 should be"
    );
    assert.equal(
      wallet3.valueOf(),
      424999992 * 10 ** 9,
      "The Balance W3 should be"
    );
    assert.equal(
      wallet4.valueOf(),
      112500000 * 10 ** 9,
      "The Balance W4 should be"
    );
    assert.equal(
      wallet5.valueOf(),
      200000000 * 10 ** 9 + 2 * 200000000 * 10 ** 9,
      "The Balance W5 should be"
    );
    assert.equal(
      wallet6.valueOf(),
      1000000000 * 10 ** 9,
      "The Balance W6 should be"
    );
    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });

  it("Test7 : mint loop every month (2 mint)", async () => {
    const bep = await BEP20.deployed();
    for (let step = 0; step < 2; step++) {
      await time.increaseTo(icoNumber + 3 * month + step * month);

      await bep.mint(1);
      const balance = await bep.balanceOf(accounts[0]);
      const wallet1 = await bep.balanceOf(accounts[1]);
      const wallet2 = await bep.balanceOf(accounts[2]);
      const wallet3 = await bep.balanceOf(accounts[3]);
      const wallet4 = await bep.balanceOf(accounts[4]);
      const wallet5 = await bep.balanceOf(accounts[5]);
      const wallet6 = await bep.balanceOf(accounts[6]);

      assert.equal(
        wallet1.valueOf(),
        367500008 * 10 ** 9,
        "The Balance should be"
      );
      assert.equal(
        wallet2.valueOf(),
        90000000 * 10 ** 9,
        "The Balance W2 should be"
      );
      assert.equal(
        wallet3.valueOf(),
        424999992 * 10 ** 9,
        "The Balance W3 should be"
      );
      assert.equal(
        wallet4.valueOf(),
        112500000 * 10 ** 9,
        "The Balance W4 should be"
      );
      assert.equal(
        wallet5.valueOf(),
        200000000 * 10 ** 9 + (3 + step) * 200000000 * 10 ** 9,
        "The Balance W5 should be"
      );
      assert.equal(
        wallet6.valueOf(),
        1000000000 * 10 ** 9,
        "The Balance W6 should be"
      );
      assert.equal(balance.valueOf(), 0, "The Balance should be  0");
    }
  });

  it("Test8 : try to mint after 24 month", async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(icoNumber + 24 * month);
    await expectRevert(bep.mint(1), "BEP20: ICO Round 2 cap exceeded");

    const balance = await bep.balanceOf(accounts[0]);
    const wallet1 = await bep.balanceOf(accounts[1]);
    const wallet2 = await bep.balanceOf(accounts[2]);
    const wallet3 = await bep.balanceOf(accounts[3]);
    const wallet4 = await bep.balanceOf(accounts[4]);
    const wallet5 = await bep.balanceOf(accounts[5]);
    const wallet6 = await bep.balanceOf(accounts[6]);

    assert.equal(
      wallet1.valueOf(),
      367500008 * 10 ** 9,
      "The Balance should be"
    );
    assert.equal(
      wallet2.valueOf(),
      90000000 * 10 ** 9,
      "The Balance W2 should be"
    );
    assert.equal(
      wallet3.valueOf(),
      424999992 * 10 ** 9,
      "The Balance W3 should be"
    );
    assert.equal(
      wallet4.valueOf(),
      112500000 * 10 ** 9,
      "The Balance W4 should be"
    );
    assert.equal(
      wallet5.valueOf(),
      200000000 * 10 ** 9 + 4 * 200000000 * 10 ** 9,
      "The Balance W5 should be"
    );
    assert.equal(
      wallet6.valueOf(),
      1000000000 * 10 ** 9,
      "The Balance W6 should be"
    );
    assert.equal(balance.valueOf(), 0, "The Balance should be  0");
  });
});
