import _ from 'lodash';

const list = _.range(100);
let res = _.reduce(list, (a, b) => a + b);
res = _.shuffle(list);
console.log(res);
