const list = [1,2,3];

function test(subset, data) {
  console.log('call test');
  console.log('subset', subset);
  console.log('data', data);
  if (data.length === 0) {
    console.log('zero');
    return subset;
  }

  const top = data[0];
  const addTopToExistSubsetMember = subset.map(v => [...v, top]);
  const totalSubset = [...subset, [top], ...addTopToExistSubsetMember]
  const remainingData = data.slice(1);

  console.log('top', top);
  console.log('addTopToExistSubsetMember', addTopToExistSubsetMember);
  console.log('totalSubset', totalSubset);
  console.log('remainingData', remainingData);

  return test(totalSubset, remainingData);
}

test([], list);