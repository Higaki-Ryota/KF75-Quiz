// 配列をシャッフルする関数
export const shuffleArray = <T>(array: T[]): T[] => {
    const copiedArray = [...array];
    for (let i = copiedArray.length - 1; i >= 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [copiedArray[i], copiedArray[rand]] = [copiedArray[rand], copiedArray[i]];
    }
    return copiedArray;
  };
  
  // 配列からランダムに n 個選んだ配列を返す関数
  export const getRandomArray = <T>(array: T[], n: number): T[] => {
    return shuffleArray(array).slice(0, n);
  };