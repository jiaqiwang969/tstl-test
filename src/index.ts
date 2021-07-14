import std from "tstl";

function main(): void
{
    const map: std.TreeMap<number, string> = new std.TreeMap();

    map.emplace(1, "First");
    map.emplace(4, "Fourth");
    map.emplace(5, "Fifth");
    map.set(9, "Nineth");

    for (let it = map.begin(); !it.equals(map.end()); it = it.next())
        console.log(it.first, it.second);

    const x: std.TreeMap.Iterator<number, string> = map.lower_bound(3);
    console.log(`lower bound of 3 is: ${x.first}, ${x.second}`);
}
main();