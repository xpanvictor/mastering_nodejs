function* listData(state) {
  state = ['one', 'two', 'buckle', 'my', 'shoe'];
  let current;

  while ((current = state.shift())) {
    yield current;
  }
}

let list = listData([]);
let item;

while ((item = list.next())) {
  if (!item.value) {
    break;
  }
  console.log('generated:', item.value);
}
