const curDot = window.curDot;

const cursor = curDot({
  diameter: 30,
  borderWidth: 1,
  borderColor: "#fff",
  easing: 4,
  background: "transparent",
  zIndex: 9999,
});

cursor.over("#cur-dot-moti", {
  scale: 3,
  background: "white",
});

cursor.over(".next-link", {
  scale: 3,
  background: "white",
});

cursor.over(".user-portrait", {
  scale: 3,
  background: "red",
});

cursor.over("#next-link-action", {
  scale: 3,
  background: "white",
});

