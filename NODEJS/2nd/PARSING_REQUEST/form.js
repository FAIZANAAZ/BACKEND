import fs from 'fs';
// hm node
// **********************
export const reqHandler = (request, response) => {
    console.log(request.url, request.method);
    if (request.url === '/') {
        response.setHeader("Content-Type", "text/html");
        // hm header set kry hen
        response.write("<html>");
        response.write("<h1>hello</h1>");
        response.write("<body>");
        response.write("<h1>Enter Your Details</h1>");
        response.write("<form action='/submit' method='POST'>");
        // ye submit url pr data lekr jayga 
        response.write("<label for='username'>Username: </label>");
        response.write("<input type='text' name='username' placeholder='Enter your name'><br>");
        response.write("<label for='email'>Email: </label>");
        response.write("<input type='email' name='email' placeholder='Enter your email'><br>");
        response.write("<label for='age'>Age: </label>");
        response.write("<input type='number' name='age' placeholder='Enter your age'><br>");
        response.write("<label>Gender: </label><br>");
        response.write("<input type='radio' name='gender' value='male'> Male");
        response.write("<input type='radio' name='gender' value='female'> Female<br>");
        response.write("<button type='submit' value='Submit'>Send</button>");
        response.write("</form>");
        response.write("</body>");
        response.write("</html>");
        // ////////////////////////////////////////////////
        // isy hm koch bhi likh skty hen acha dikahny ke liey html me likh diya 
        return response.end();
    }
    else if (request.url === '/submit' && request.method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            // yha hmny kha he jesy hi chunks ay mojhe dikhao chunks yani data ka chota sa hisa 
            // 5 72 6e 61 6d 65 3d  esy 
            body.push(chunk);
            // isy wo chunks ko array me push krdi he 
        });
        request.on('end', () => {
            const fullbody = Buffer.concat(body).toString();
            console.log(fullbody);
            //  ye buffer concat me chunks ko string me convert krdi he or ye encode hokr ayga yani space ke bina sb mil kr 
            const params = new URLSearchParams(fullbody);
            // ismy sy hm url nikalengy 
            console.log(params.get('username'));
            const bodyobject = {};
            // ye ak object bnaya he 
            for (const [key, value] of params.entries()) {
                // taky aka ak krky ay value 
                bodyobject[key] = value;
                console.log(bodyobject);
                fs.writeFileSync('data.txt', JSON.stringify(bodyobject));
                // file me likh diya 
            }
        });
        //  isy hm os urls ko nikal kr ak object me dery hen ke form me kiya kiya ara he name email wagera
        //******************************************** */ 
        // isy faiza naaz write.filesync me a jayga 
        response.statusCode = 302;
        response.setHeader('Location', '/');
        // isy wo dobara eedirect ho jayga home pr 
        return response.end();
    }
    else if (request.url === '/product') {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>hello product</h1>");
        return response.end();
        // return likhna isi liye lazim he kioky agr hmny response.end likhty hen to osky bad again header wagera bhej nhi skty agr hmny ak header bheja he if else sy bahir to wo error dedega kioky if else ke bad to agy ka code khod sy run hota he to hm return krdengy phir nhi hoga wo 
    }
    else {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>hello world</h1>");
        response.end();
    }
};
// ye ak server bnayga 
