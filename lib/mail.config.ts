import nodemailer from "nodemailer";

export const sendEmailService = async (type: any, data: any, to: any, subject: any, file?: any) => {
    try {
        const parsed = "<p>Test mail send</p>";
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            requireTLS: true,
            auth: {
                user: "europcarchatgpttransfer@gmail.com",
                pass: "ejve swuy gmbq quhj",
            },
        });
        const attachments = [];
        if (file) {
            attachments.push({
                filename: file.fileName,
                content: file.stream,
            });
        }
        await transporter.sendMail({
            from: "europcarchatgpttransfer@gmail.com",
            to, // list of receivers
            subject, // Subject line
            html: parsed,
            attachments,
        });
    } catch (e) {
        throw e;
    }
};
