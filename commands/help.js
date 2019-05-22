const { RichEmbed } = require('discord.js');

exports.run = async (client, message, language, prefix) => {

  const helpEmbed = new RichEmbed()
    .setAuthor(language.helpTitle, client.user.avatarURL)
    .setColor(process.env.EMBED_COLOR)
    .addField("User Commands",
      `${prefix}help >> ${language.helpCMDExplanation}
       ${prefix}suggest >> ${language.suggestCMDExplanation}
       ${prefix}list >> ${language.listCMDExplanation}
       ${prefix}support >> ${language.supportCMDExplanation}
       ${prefix}invite >> ${language.inviteCMDExplanation}
       ${prefix}uptime >> ${language.uptimeCMDExplanation}
       ${prefix}donate >> ${language.donateCMDExplanation}`, false)
    .addField("Staff Commands",
      `${prefix}approve >> ${language.approveCMDExplanation}
       ${prefix}reject >> ${language.rejectCMDExplanation}`, false)
    .addField("Admin Commands",
      `${prefix}config >> ${language.configCMDExplanation}`, false)
    .setTimestamp()
    .setFooter(process.env.EMBED_FOOTER);

  try
  {
    await message.channel.send(language.privateMessages);
    message.author.send({ embed: helpEmbed });
  }
  catch (err)
  {
    message.channel.send({ embed: helpEmbed });
  }

}
