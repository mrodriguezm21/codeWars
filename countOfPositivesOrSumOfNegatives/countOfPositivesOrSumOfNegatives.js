function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  let positives = 0;
  let negatives = 0;
  input.map((v) => {
    v > 0 ? positives++ : (negatives += v);
  });
  return [positives, negatives];
}
let testData = [];

countPositivesSumNegatives(testData);
