import type { AnchorTypes } from "@saberhq/anchor-contrib";
import type { PublicKey } from "@solana/web3.js";

import type { InertiaIDL } from "../../idls/inertia";
import type { WithKey } from "../Volt/voltTypes";

export type InertiaTypes = AnchorTypes<
  InertiaIDL,
  {
    optionsContract: InertiaContract;
    stubOracle: StubOracle;
  }
>;

export type InertiaDefined = InertiaTypes["Defined"];
export type InertiaAccounts = InertiaTypes["Accounts"];
export type InertiaState = InertiaTypes["State"];
export type InertiaError = InertiaTypes["Error"];
export type InertiaProgram = InertiaTypes["Program"];
export type InertiaInstructions = InertiaTypes["Instructions"];
export type InertiaMethods = InertiaTypes["Methods"];
export type InertiaEvents = InertiaTypes["Events"];

export type StubOracle = InertiaAccounts["StubOracle"];
export type StubOracleWithKey = StubOracle & WithKey;
export type InertiaContract = InertiaAccounts["OptionsContract"];
export type InertiaContractWithKey = InertiaContract & WithKey;

export type InertiaIXAccounts = {
  initialize: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["newContract"]["accounts"]
    >[0]]: PublicKey;
  };
  exercise: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["optionExercise"]["accounts"]
    >[0]]: PublicKey;
  };
  settle: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["optionSettle"]["accounts"]
    >[0]]: PublicKey;
  };
  revertSettle: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["revertOptionSettle"]["accounts"]
    >[0]]: PublicKey;
  };
  createStubOracle: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["createStubOracle"]["accounts"]
    >[0]]: PublicKey;
  };
  setStubOracle: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["setStubOracle"]["accounts"]
    >[0]]: PublicKey;
  };
  // reclaimFundsFromExerciseAdmin: {
  //   [A in keyof Parameters<
  //     InertiaProgram["instruction"]["reclaimFundsFromExerciseAdmin"]["accounts"]
  //   >[0]]: PublicKey;
  // };
  // reinitializeUnderlyingMint: {
  //   [A in keyof Parameters<
  //     InertiaProgram["instruction"]["reinitializeUnderlyingMint"]["accounts"]
  //   >[0]]: PublicKey;
  // };
  write: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["optionWrite"]["accounts"]
    >[0]]: PublicKey;
  };
  redeem: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["optionRedeem"]["accounts"]
    >[0]]: PublicKey;
  };
  close: {
    [A in keyof Parameters<
      InertiaProgram["instruction"]["closePosition"]["accounts"]
    >[0]]: PublicKey;
  };
};
