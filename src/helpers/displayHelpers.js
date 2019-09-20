export function createFolderArray(folders, items) {
  let key = 0
  let displayArray = []
  let itemMap = []

  folders.forEach(folder => {
    displayArray.push({
      key: key,
      id: null,
      name: folder,
      children: [],
      folder: true
    })
    key++
  })
  items.forEach(item => {
    if (item.folderName) {
      let idx = displayArray.findIndex(folder => {
        return folder.name === item.folderName
      })
      if (idx !== -1) {
        displayArray[idx].children.push({
          key: key,
          id: item._id,
          name: item.title,
          folder: false
        })
        itemMap.push({
          key,
          id: item._id
        })
        key++
      } else {
        displayArray.push({
          key: key,
          id: item._id,
          name: item.title,
          folder: false
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
        name: item.title,
        children: [],
        folder: false
      })
      itemMap.push({
        key,
        id: item._id
      })
      key++
    }
  })
  displayArray
    .sort((a, b) => {
      if (a.name > b.name) {
        return 0
      } else {
        return -1
      }
    })
    .sort((a, b) => {
      if (a.folder > b.folder) {
        return -1
      } else {
        return 0
      }
    })
  displayArray.forEach(folder => {
    return folder.children.sort((a, b) => {
      if (a.itemName > b.itemName) {
        return 0
      } else {
        return -1
      }
    })
  })

  return { displayArray, itemMap }
}
