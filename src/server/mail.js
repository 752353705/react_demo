const nodemailer = require('nodemailer');
//1. 创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
        user: '2373639182@qq.com',
        pass: 'spnuaxqmbtvhecef' 
    }
});
module.exports = {
    sendMail(mail, code) {
        let mailinfo = {
            from: '"Fred Foo 👻" <2373639182@qq.com>',//发送方
            to: `${mail}`,//接收方 
            subject: 'Hello ✔', 
            html: `<b>欢迎注册猫头鹰超市管理管理系统,您的验证码是${code},验证码有效期为五分钟
            </b>` 
        }
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailinfo, (err) => {
                console.log(err);
                if (err) {
                   reject()
                } else {
                    resolve()
                }
            });
        })
    }
}