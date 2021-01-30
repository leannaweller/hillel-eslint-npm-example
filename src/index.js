import _ from 'lodash';

const list_list = _.range(100);
let res = _.reduce(list, (a, b) => a + b);
res = _.shuffle(list);
_.toPairs(list);
console.log(res);
const str = '';
