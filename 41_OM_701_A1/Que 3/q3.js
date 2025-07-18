import { ChatbotReply } from './module1.js';
import readline from 'readline';

const r1 = readline.createInterface(process.stdin, process.stdout);
r1.setPrompt("You ==> ");
r1.prompt();

r1.on('line', function(message) {
    console.log('TravelBot ==> ' + ChatbotReply(message));    
    r1.prompt();
}).on('close', function() {
    process.exit(0);
});
