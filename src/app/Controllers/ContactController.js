const Contact = require('../Models/Contact')
const yup = require('yup')
const axios = require('axios')
const { hapikey } = require('../../config/config')

class ContactController {
    async show(req, res) {
        console.log("show acess");
    }

    async showAll(req, res) {
        console.log("showAll acess");
    }

    async update(req, res) {
        console.log("update ok");
    }


    async store(req, res) {

        let schema = yup.object().shape({
            company: yup.string().required(),
            email: yup.string().email().required(),
            name: yup.string().required(),
            phone: yup.number().required(),
            site: yup.url().required(),

        })
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: true, message: 'error validation'
            })
        }
        const { company, name, email, phone, site } = req.body

        axios({
            method: 'post',
            url: `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/${email}/?hapikey=${hapikey}`,
            data: {
                "properties": [
                    { "property": "company", "value": company },
                    { "property": "name", "value": name },
                    { "property": "email", "value": email },
                    { "property": "phone", "value": phone },
                    { "property": "site", "value": url }
                ]
            }
        })
            .then((response) => {
                console.log("contact done");
            })
            .catch((error) => {
                console.log(`error registering: ${error}`)

            })


        const data = { company, name, email, phone, site }


        const contact = await Contact.create(data, (err) => {
            if (err)
                return res.status(400).json({
                    error: true, message: 'error add contact'
                })
            return res.status(200).json({
                error: false, message: 'create contact',
                contact
            })
        })
    }
    async remove(req, res){
        console.log('delete function')
    }
}
module.exports = new ContactController()