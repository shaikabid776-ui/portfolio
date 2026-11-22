import Container from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <div className="border-t border-line">
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <li key={stat.label} className="py-10 md:px-10 md:first:pl-0 md:last:pr-0">
              <p className="font-serif text-6xl leading-none">
                <CountUp value={stat.value} />
                {stat.suffix && <span className="text-2xl text-accent">{stat.suffix}</span>}
              </p>
              <p className="mt-4 text-sm text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
