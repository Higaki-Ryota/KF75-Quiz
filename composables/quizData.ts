// クイズのデータ

// export type QuizData = {
//     index: number;
//     correctIndex: number;
//   };

  export const quizData = [
    [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
    [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
    [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
  ];
  
// export const easyQuizData: QuizData[] = [
//     {
//       index: 0,
//       correctIndex: 0,
//   },
//     {question: "初級問題1",
//       options: ["初級選択肢1-0", "初級選択肢1-1", "初級選択肢1-2", "初級選択肢1-3"],
//       correctIndex: 1,
//       description: "初級解説1",
//   },
//     {question: "初級問題2",
//     options: ["初級選択肢2-0", "初級選択肢2-1", "初級選択肢2-2", "初級選択肢2-3"],
//     correctIndex: 2,
//     description: "初級解説2",
//   },
//     {question: "初級問題3",
//       options: ["初級選択肢3-0", "初級選択肢3-1", "初級選択肢3-2", "初級選択肢3-3"],
//       correctIndex: 3,
//       description: "初級解説3",
//   },
//   {question: "初級問題4",
//   options: ["初級選択肢4-0", "初級選択肢4-1", "初級選択肢4-2", "初級選択肢4-3"],
//   correctIndex: 0,
//   description: "初級解説4",
//   },
//     {question: "初級問題5",
//       options: ["初級選択肢5-0", "初級選択肢5-1", "初級選択肢5-2", "初級選択肢5-3"],
//       correctIndex: 1,
//       description: "初級解説5",
//   },
//     {question: "初級問題6",
//     options: ["初級選択肢6-0", "初級選択肢6-1", "初級選択肢6-2", "初級選択肢6-3"],
//     correctIndex: 2,
//     description: "初級解説6",
//   },
//     {question: "初級問題7",
//     options: ["初級選択肢7-0", "初級選択肢7-1", "初級選択肢7-2", "初級選択肢7-3"],
//     correctIndex: 3,
//     description: "初級解説7",
//   },
//     {question: "初級問題8",
//     options: ["初級選択肢8-0", "初級選択肢8-1", "初級選択肢8-2", "初級選択肢8-3"],
//     correctIndex: 0,
//     description: "初級解説8",
//   },
//     {question: "初級問題9",
//       options: ["初級選択肢9-0", "初級選択肢9-1", "初級選択肢9-2", "初級選択肢9-3"],
//       correctIndex: 1,
//       description: "初級解説9",
//   },
//     {question: "初級問題10",
//     options: ["初級選択肢10-0", "初級選択肢10-1", "初級選択肢10-2", "初級選択肢10-3"],
//     correctIndex: 2,
//     description: "初級解説10",
//   },
//     {question: "初級問題11",
//     options: ["初級選択肢11-0", "初級選択肢11-1", "初級選択肢11-2", "初級選択肢11-3"],
//     correctIndex: 3,
//     description: "初級解説11",
//   },
//   {question: "初級問題12",
//     options: ["初級選択肢12-0", "初級選択肢12-1", "初級選択肢12-2", "初級選択肢12-3"],
//     correctIndex: 0,
//     description: "初級解説0",
//   },
//     {question: "初級問題13",
//       options: ["初級選択肢13-0", "初級選択肢13-1", "初級選択肢13-2", "初級選択肢13-3"],
//       correctIndex: 1,
//       description: "初級解説1",
//   },
//     {question: "初級問題14",
//     options: ["初級選択肢14-0", "初級選択肢14-1", "初級選択肢14-2", "初級選択肢14-3"],
//     correctIndex: 2,
//     description: "初級解説2",
//   },
//     {question: "初級問題15",
//       options: ["初級選択肢15-0", "初級選択肢15-1", "初級選択肢15-2", "初級選択肢15-3"],
//       correctIndex: 3,
//       description: "初級解説3",
//   },
//   {question: "初級問題16",
//   options: ["初級選択肢16-0", "初級選択肢16-1", "初級選択肢16-2", "初級選択肢16-3"],
//   correctIndex: 0,
//   description: "初級解説4",
//   },
//     {question: "初級問題17",
//       options: ["初級選択肢17-0", "初級選択肢17-1", "初級選択肢17-2", "初級選択肢17-3"],
//       correctIndex: 1,
//       description: "初級解説5",
//   },
//     {question: "初級問題18",
//     options: ["初級選択肢18-0", "初級選択肢18-1", "初級選択肢18-2", "初級選択肢18-3"],
//     correctIndex: 2,
//     description: "初級解説6",
//   },
//     {question: "初級問題19",
//     options: ["初級選択肢19-0", "初級選択肢19-1", "初級選択肢19-2", "初級選択肢19-3"],
//     correctIndex: 3,
//     description: "初級解説7",
//   },
//     {question: "初級問題20",
//     options: ["初級選択肢20-0", "初級選択肢20-1", "初級選択肢20-2", "初級選択肢20-3"],
//     correctIndex: 0,
//     description: "初級解説8",
//   },
//     {question: "初級問題21",
//       options: ["初級選択肢21-0", "初級選択肢21-1", "初級選択肢21-2", "初級選択肢21-3"],
//       correctIndex: 1,
//       description: "初級解説9",
//   },
//     {question: "初級問題22",
//     options: ["初級選択肢22-0", "初級選択肢22-1", "初級選択肢22-2", "初級選択肢22-3"],
//     correctIndex: 2,
//     description: "初級解説10",
//   },
//     {question: "初級問題23",
//     options: ["初級選択肢23-0", "初級選択肢23-1", "初級選択肢23-2", "初級選択肢23-3"],
//     correctIndex: 3,
//     description: "初級解説11",
//   },
// ];

// export const mediumQuizData: QuizData[] = [
//     {question: "中級問題0",
//       options: ["中級選択肢0-0", "中級選択肢0-1", "中級選択肢0-2", "中級選択肢0-3"],
//       correctIndex: 1,
//       description: "中級解説0",
//   }];

//   export const difficultQuizData: QuizData[] = [
//     {question: "上級問題0",
//       options: ["上級選択肢0-0", "上級選択肢0-1", "上級選択肢0-2", "上級選択肢0-3"],
//       correctIndex: 1,
//       description: "上級解説0",
//   }];

//   export const quizData = [easyQuizData, mediumQuizData, difficultQuizData]