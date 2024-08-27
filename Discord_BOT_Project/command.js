const { REST, Routes }= require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'Create a short url',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTI3NjkzMTkyNTE1MTQ1MzM2NQ.GFRnT5.fJsz-sMXtdpeFEABAII-PGOfnRgnSxzMnbjuW4");

  (async ()=>{
    try {
      console.log('Started refreshing application (/) commands.');
    
      await rest.put(Routes.applicationCommands('1276931925151453365'), { body: commands });
    
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();
  