import ReqResAPI from "../components/reqres";
import { registerResponse, singleUserResponse } from "../objects/response.singleuser";
import { listUserResponse } from "../objects/response.listuser";
import chai from "chai";
import { dataUpdate } from "../objects/response.update";
chai.use(require('chai-json-schema'));

describe("ReqRes Test", async function () {
	it("should regist a new user", async function () {
		const res = await ReqResAPI.register({
			email: "eve.holt@reqres.in",
			password: "pistol",
		});

        this.token = res.data.token;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data).to.be.jsonSchema(registerResponse);
	});
    it('should see all available users', async function () {
        const res = await ReqResAPI.getAllUser();
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data).to.be.jsonSchema(listUserResponse);
    });
    it('should update data', async function () {
        const res = await ReqResAPI.dataUpdate({
            name : "morpheus",
            job : "zion resident",
        });
        this.token = res.data.token;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data.name).to.be.jsonSchema(dataUpdate);
    });
});