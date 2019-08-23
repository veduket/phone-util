const _this = module.exports = {
  match_phone: (phone1, phone2) => {
    if (phone1 && phone2) {
      const p1 = _this.formatted_phone(phone1)
      const p2 = _this.formatted_phone(phone2)
      return (p1 === p2)
    } else {
      return false
    }
  },
  formatted_phone: (phone) => {
    if (phone) {
      return ['+251', phone.replace(/\D/g, '').replace(/^((0)*(251)*(0)*)*/g, '')].join('')
    } else {
      return null
    }
  }
}
