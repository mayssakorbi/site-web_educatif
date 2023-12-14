var url=require('url');
var fs=require('fs');

function renderHTML(path,response){
    fs.readFile(path,null,function(error,data){
        if(error){
            response.writeHead(404);
            response.write('file not found!');
        }else{
            response.write(data);
        }
        response.end();
    });
}
module.exports={
    handleRequest: function(request,response){
        response.writeHead(200,{'content-Type':'text/html'})
        var path=url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderHTML('C:\Users\IHEB-F-windows\Desktop\projet d_ete\accueil/p.html',reponse);
                break;
            case '/autoformation':
                renderHTML('C:\Users\IHEB-F-windows\Desktop\projet d_ete\auto formation/index.html',response);
                break;
            case '/education':
                renderHTML('C:\Users\IHEB-F-windows\Desktop\projet d_ete\education/index.html',response);
                break;
            case '/locationetcolocation':
                renderHTML('C:\Users\IHEB-F-windows\Desktop\projet d_ete\location et colocation/index.html',response);
                break;
            case '/resultat':
                renderHTML('C:\Users\IHEB-F-windows\Desktop\projet d_ete\resultat/index.html',response);
                break;

            default:
                response.writeHead(404);
                response.write('route not defined');
                response.end();
        }
    }

};