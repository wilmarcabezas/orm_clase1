import { testdriver } from "../models/testdriver.js";

export async function getTestDrivers(req, res){
    try {
        const TestDriver = await testdriver.findAll({
            atributes: ["Id","Name","Date"],
        });
        res.json(TestDriver);
    } catch (error) {
        res.sendStatus(500).send({error:error.message,});
    }
}

export async function addTestDrivers(req, res){
    const { Id, Name, Date } = req.body;
    try {
        
        console.log(Date);
        const newTestDriver = await testdriver.create(
            {
                Name,
                Date,
            },
            {
                fields: ["Name", "Date"],
            }
        );
        return res.json(newTestDriver);
    } catch (error) {
        res.sendStatus(500).send({error:error.message,});
    }
}

export async function getTestDriver(req, res){
    try {
        const {id} = req.body.params;
        const TestDriver = testdriver.findOne({
            where:{
                id,
            }
        });
        res.json(TestDriver);
    } catch (error) {
        res.sendStatus(500).send({error:error.message,});
    }
}

export async function updateTestDriver(req, res) {
    try {
        const {id} = req.body.params;
        const {Name, Date} = req.body;

        const TestDriver = testdriver.findByPk(id);
        TestDriver.Name=Name;
        TestDriver.Date=Date;
        await TestDriver.save();

        res.json(TestDriver);
    } catch (error) {
        res.sendStatus(500).send({error:error.message,});        
    }
}

export async function deleteTestDriver(req, res){
    try {
        const {id} = req.params.id;
        await testdriver.destroy(id);

        return res.sendStatus(204);
    } catch (error) {
        res.sendStatus(500).send({error:error.message,});        
    }
}