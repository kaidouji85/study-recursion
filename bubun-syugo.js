/** 集合 */
const list = [1,2,3];

/**
 * 部分集合を求める
 *
 * @param subsets 現在算出した部分集合の集まり
 * @param data 集合の残り
 * @return 更新した部分集合
 */
function test(subsets, data) {
  if (data.length === 0) {
    return subsets;
  }

  const top = data[0];
  const addTopToExistSubsetMember = subsets.map(v => [...v, top]);
  const totalSubset = [...subsets, [top], ...addTopToExistSubsetMember]
  const remainingData = data.slice(1);
  return test(totalSubset, remainingData);
}

test([], list);