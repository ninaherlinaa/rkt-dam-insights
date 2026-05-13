import { useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { TopNav } from "@/components/layout/TopNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { instrumentList, generateSeries } from "@/data/mock";

const dams = [
  { id: "utama", label: "Bendungan Utama" },
  { id: "sadel-1", label: "Sadel 1" },
  { id: "sadel-2", label: "Sadel 2" },
];

const Instrumen = () => {
  const [selectedId, setSelectedId] = useState(instrumentList[0].id);
  const [dam, setDam] = useState("utama");
  const [date, setDate] = useState<Date>(new Date());

  const instrument = instrumentList.find((i) => i.id === selectedId)!;
  const data = useMemo(() => {
    const seed = (instrument.id.length + dam.length + date.getDate()) | 0;
    return generateSeries(instrument.base, 60, seed);
  }, [instrument, dam, date]);

  return (
    <main className="min-h-screen bg-background">
      <TopNav />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Dashboard Instrumentasi</h1>
        <p className="text-muted-foreground">Pembacaan time-series setiap kategori instrumen</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <Card className="p-3 lg:col-span-1 h-fit lg:sticky lg:top-20">
            <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Instrumen
            </p>
            <ul className="space-y-1">
              {instrumentList.map((it) => (
                <li key={it.id}>
                  <button
                    onClick={() => setSelectedId(it.id)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      selectedId === it.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-foreground",
                    )}
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </Card>

          {/* Chart area */}
          <Card className="p-5 lg:col-span-3">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">{instrument.label}</h2>
                <p className="text-sm text-muted-foreground">
                  Satuan: {instrument.unit} · 60 hari terakhir
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Select value={dam} onValueChange={setDam}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {dams.map((d) => (
                      <SelectItem key={d.id} value={d.id}>
                        {d.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[200px] justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(date, "dd MMM yyyy")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => d && setDate(d)}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11 }}
                    tickFormatter={(d) => format(new Date(d), "dd/MM")}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    stroke="hsl(var(--muted-foreground))"
                    label={{
                      value: instrument.unit,
                      angle: -90,
                      position: "insideLeft",
                      style: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: 8,
                    }}
                    labelFormatter={(d) => format(new Date(d as string), "dd MMMM yyyy")}
                    formatter={(v: number) => [`${v} ${instrument.unit}`, instrument.label]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Instrumen;
