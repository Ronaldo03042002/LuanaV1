let handler = function (m) {
  // this.sendContact(m.chat, '557196834782', 'Ronaldo Silva', m)
  this.sendContact(m.chat, '557196834782', 'Ronaldo Silva', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(dono|criador)$/i

module.exports = handler
