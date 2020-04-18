const expect = require('chai').expect;
const lib = require("../index");

const log = (...args) => {
    if (typeof process.env.CONSOLE_LOG_OFF === "undefined") {
        console.log(...args);
    }
};

describe('reEvaluateEnv', function () {

    // -----------------------------------------------------------------------------------------------------------------------------
    beforeEach(function () {
        log("---------------", this.currentTest.title, "---------------");
        delete process.env.DEV_CONSOLE_ON;
        delete process.env.DEV_CONSOLE_FORCE_OFF;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = 1', function () {
        process.env.DEV_CONSOLE_ON = 1;
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.true;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [1]', function () {
        process.env.DEV_CONSOLE_ON = "1";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.true;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [ 1 ]', function () {
        process.env.DEV_CONSOLE_ON = " 1 ";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.true;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = 0', function () {
        process.env.DEV_CONSOLE_ON = 0;
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [0]', function () {
        process.env.DEV_CONSOLE_ON = "0";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [ 0 ]', function () {
        process.env.DEV_CONSOLE_ON = " 0 ";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = []', function () {
        process.env.DEV_CONSOLE_ON = "";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [  ]', function () {
        process.env.DEV_CONSOLE_ON = "  ";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [ random string ]', function () {
        process.env.DEV_CONSOLE_ON = " random string ";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON undefined + DEV_CONSOLE_FORCE_OFF undefined', function () {
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);
        log("DEV_CONSOLE_FORCE_OFF [%s] type [%s]", process.env.DEV_CONSOLE_FORCE_OFF, typeof process.env.DEV_CONSOLE_FORCE_OFF);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [1] + DEV_CONSOLE_FORCE_OFF = [1]', function () {
        process.env.DEV_CONSOLE_ON = "1";
        process.env.DEV_CONSOLE_FORCE_OFF = "1";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);
        log("DEV_CONSOLE_FORCE_OFF [%s] type [%s]", process.env.DEV_CONSOLE_FORCE_OFF, typeof process.env.DEV_CONSOLE_FORCE_OFF);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [1] + DEV_CONSOLE_FORCE_OFF = [ 1 ]', function () {
        process.env.DEV_CONSOLE_ON = "1";
        process.env.DEV_CONSOLE_FORCE_OFF = " 1 ";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);
        log("DEV_CONSOLE_FORCE_OFF [%s] type [%s]", process.env.DEV_CONSOLE_FORCE_OFF, typeof process.env.DEV_CONSOLE_FORCE_OFF);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.false;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [1] + DEV_CONSOLE_FORCE_OFF = [0]', function () {
        process.env.DEV_CONSOLE_ON = "1";
        process.env.DEV_CONSOLE_FORCE_OFF = "0";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);
        log("DEV_CONSOLE_FORCE_OFF [%s] type [%s]", process.env.DEV_CONSOLE_FORCE_OFF, typeof process.env.DEV_CONSOLE_FORCE_OFF);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.true;
    });

    // -----------------------------------------------------------------------------------------------------------------------------
    it('DEV_CONSOLE_ON = [1] + DEV_CONSOLE_FORCE_OFF = [ 0 ]', function () {
        process.env.DEV_CONSOLE_ON = "1";
        process.env.DEV_CONSOLE_FORCE_OFF = " 0 ";
        log("DEV_CONSOLE_ON [%s] type [%s]", process.env.DEV_CONSOLE_ON, typeof process.env.DEV_CONSOLE_ON);
        log("DEV_CONSOLE_FORCE_OFF [%s] type [%s]", process.env.DEV_CONSOLE_FORCE_OFF, typeof process.env.DEV_CONSOLE_FORCE_OFF);

        lib.reEvaluateEnv();
        log("isOn [%s]", lib.isOn());

        expect(lib.isOn()).to.be.true;
    });



});



