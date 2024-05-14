let rooms = [
    { n: "1A", s: 8, f: "IT" },
    { n: "3v", s: 15, f: "Math" },
    { n: "2C", s: 27, f: "Physic" },
    { n: "1E", s: 21, f: "IT" },
    { n: "4G", s: 10, f: "Sience" }
];
function showRooms() {
    console.log("Rooms:");
    rooms.forEach(room => {
        console.log(`${room.n} (${room.f}) - ${room.s} seats`);
    });
}
function showFacultyRooms(faculty) {
    console.log(`Rooms for ${faculty} faculty:`);
    rooms.filter(room => room.f === faculty).forEach(room => {
        console.log(`${room.n} - ${room.s} seats`);
    });
}
function showSuitableRooms(group) {
    console.log(`Suitable rooms for ${group.n} (${group.f}):`);
    rooms.filter(room => room.s >= group.students && room.f === group.f).forEach(room => {
        console.log(`${room.n} - ${room.s} seats`);
    });
}
function sortRoomsBySeats() {
    return rooms.sort((a, b) => a.s - b.s);
}
function sortRoomsByName() {
    return rooms.sort((a, b) => a.n.localeCompare(b.n));
}

showRooms();
console.log("\n");
showFacultyRooms("IT");
console.log("\n");
showSuitableRooms({ n: "Group 1", students: 16, f: "IT" });
console.log("\n");
console.log("Rooms after sorting by seats:");
console.log(sortRoomsBySeats());
console.log("\n");
console.log("Rooms after sorting by name:");
console.log(sortRoomsByName());
