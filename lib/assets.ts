const images = import.meta.glob("../assets/images/**/*", { eager: true });
const data = import.meta.glob("../assets/data/**/*", { eager: true });

const ret: Record<string, string> = {};

for (const key in images) {
  ret[key.replace("../assets/images/", "")] = images[key].default as string;
}
for (const key in data) {
  ret[key.replace("../assets/data/", "")] = data[key].default as string;
}

export default ret as Readonly<typeof ret>;