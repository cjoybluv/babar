export function createTreeViewArray(items, itemHeaderField) {
  let key = 0
  let displayArray = []
  let itemMap = []

  items.forEach(item => {
    if (item[itemHeaderField]) {
      let idx = displayArray.findIndex(header => {
        return header.name === item[itemHeaderField]
      })
      if (idx !== -1) {
        displayArray[idx].children.push({
          key: key,
          id: item._id,
          name: item.name,
          header: false
        })
        itemMap.push({
          key,
          id: item._id
        })
        key++
      } else {
        displayArray.push({
          key,
          id: null,
          name: item[itemHeaderField],
          children: [],
          header: true
        })
        key++
        displayArray[displayArray.length - 1].children.push({
          key: key,
          id: item._id,
          name: item.name,
          children: [],
          header: false
        })
        itemMap.push({
          key,
          id: item._id
        })
        key++
      }
    } else {
      displayArray.push({
        key: key,
        id: item._id,
        name: item.name,
        children: [],
        header: false
      })
      itemMap.push({
        key,
        id: item._id
      })
      key++
    }
  })
  if (displayArray.length) {
    displayArray
      .sort((a, b) => {
        if (!a.name) a.name = ''
        if (!b.name) b.name = ''
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 0
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        if (a.header > b.header) {
          return -1
        } else {
          return 0
        }
      })
    displayArray.forEach(header => {
      return header.children.sort((a, b) => {
        if (!a.name) a.name = ''
        if (!b.name) b.name = ''
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 0
        } else {
          return -1
        }
      })
    })
  }

  return { items: displayArray, itemMap }
}
