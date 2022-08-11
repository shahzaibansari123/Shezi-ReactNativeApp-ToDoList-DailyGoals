import {createTransport} from  'nodemailer';

export const sendMail= async (email, subject, text) => {
    const transport = createTransport({})

    await transport.sendMail({
        from : 'testUser',
        to: email,
        subject,
        text,
    })


}
