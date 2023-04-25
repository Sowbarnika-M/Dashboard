import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "go",
    label: "go",
    value: 83,
    color: "hsl(73, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 296,
    color: "hsl(1, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 40,
    color: "hsl(197, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 470,
    color: "hsl(145, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 468,
    color: "hsl(39, 70%, 50%)",
  },
];

const MyResponsivePie = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ theme: "background" }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={{ theme: "labels.text.fill" }}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ theme: "labels.text.fill" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor="black"
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsivePie;
