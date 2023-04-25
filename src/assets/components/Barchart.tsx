import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    hotdog: 0,
    hotdogColor: "hsl(206, 70%, 50%)",
    burger: 103,
    burgerColor: "hsl(96, 70%, 50%)",
    sandwich: 155,
    sandwichColor: "hsl(75, 70%, 50%)",
    kebab: 63,
    kebabColor: "hsl(68, 70%, 50%)",
    fries: 74,
    friesColor: "hsl(287, 70%, 50%)",
    donut: 147,
    donutColor: "hsl(156, 70%, 50%)",
  },
  {
    country: "AE",
    hotdog: 95,
    hotdogColor: "hsl(51, 70%, 50%)",
    burger: 11,
    burgerColor: "hsl(103, 70%, 50%)",
    sandwich: 28,
    sandwichColor: "hsl(66, 70%, 50%)",
    kebab: 146,
    kebabColor: "hsl(50, 70%, 50%)",
    fries: 43,
    friesColor: "hsl(175, 70%, 50%)",
    donut: 14,
    donutColor: "hsl(15, 70%, 50%)",
  },
  {
    country: "AF",
    hotdog: 200,
    hotdogColor: "hsl(149, 70%, 50%)",
    burger: 149,
    burgerColor: "hsl(95, 70%, 50%)",
    sandwich: 4,
    sandwichColor: "hsl(284, 70%, 50%)",
    kebab: 139,
    kebabColor: "hsl(303, 70%, 50%)",
    fries: 136,
    friesColor: "hsl(320, 70%, 50%)",
    donut: 116,
    donutColor: "hsl(228, 70%, 50%)",
  },
  {
    country: "AG",
    hotdog: 53,
    hotdogColor: "hsl(102, 70%, 50%)",
    burger: 64,
    burgerColor: "hsl(335, 70%, 50%)",
    sandwich: 141,
    sandwichColor: "hsl(345, 70%, 50%)",
    kebab: 0,
    kebabColor: "hsl(166, 70%, 50%)",
    fries: 32,
    friesColor: "hsl(119, 70%, 50%)",
    donut: 45,
    donutColor: "hsl(14, 70%, 50%)",
  },
  {
    country: "AI",
    hotdog: 69,
    hotdogColor: "hsl(88, 70%, 50%)",
    burger: 91,
    burgerColor: "hsl(195, 70%, 50%)",
    sandwich: 92,
    sandwichColor: "hsl(228, 70%, 50%)",
    kebab: 31,
    kebabColor: "hsl(61, 70%, 50%)",
    fries: 108,
    friesColor: "hsl(98, 70%, 50%)",
    donut: 66,
    donutColor: "hsl(143, 70%, 50%)",
  },
  {
    country: "AL",
    hotdog: 197,
    hotdogColor: "hsl(67, 70%, 50%)",
    burger: 41,
    burgerColor: "hsl(29, 70%, 50%)",
    sandwich: 113,
    sandwichColor: "hsl(157, 70%, 50%)",
    kebab: 85,
    kebabColor: "hsl(350, 70%, 50%)",
    fries: 150,
    friesColor: "hsl(32, 70%, 50%)",
    donut: 167,
    donutColor: "hsl(270, 70%, 50%)",
  },
  {
    country: "AM",
    hotdog: 174,
    hotdogColor: "hsl(44, 70%, 50%)",
    burger: 140,
    burgerColor: "hsl(155, 70%, 50%)",
    sandwich: 5,
    sandwichColor: "hsl(183, 70%, 50%)",
    kebab: 195,
    kebabColor: "hsl(350, 70%, 50%)",
    fries: 197,
    friesColor: "hsl(177, 70%, 50%)",
    donut: 10,
    donutColor: "hsl(351, 70%, 50%)",
  },
];

interface DataObject {
  country: string;
  hotdog: number;
  hotdogColor: string;
  burger: number;
  burgerColor: string;
  sandwich: number;
  sanwitchColor: string;
  kebab: number;
  kebabColor: string;
  fries: number;
  friesColor: string;
  donut: number;
  donutColor: string;
}

const BarChart = () => (
  <ResponsiveBar
    data={data}
    keys={["hotdog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.4}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{ theme: "background" }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ theme: "background" }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 28,
        itemWidth: 75,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 12,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
export default BarChart;
