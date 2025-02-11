import {serve} from 'bun';

serve({  // serve is a function that takes an object as an argument
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname==='/'){
            return new Response('Hello World\n',{status:200});
        }else if(url.pathname==='/ice-tea'){
            return new Response('Thanks for ordering.\n',{status:200});
        }else{
            return new Response('404 not found.\n',{status:404});
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})