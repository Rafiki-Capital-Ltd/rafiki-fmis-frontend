import React, { useState, useEffect , useLayoutEffect} from 'react';
import { Chart } from 'primereact/chart';

export function BarChart({ data }) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useLayoutEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue(
			'--text-color-secondary'
		);
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

		const options = {
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: {
				legend: {
					labels: {
						fontColor: textColor,
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary,
						font: {
							weight: 500,
						},
					},
					grid: {
						display: false,
						drawBorder: false,
					},
				},
				y: {
					ticks: {
						color: textColorSecondary,
					},
					grid: {
						color: surfaceBorder,
						drawBorder: false,
					},
				},
			},
		};

		setChartOptions(options);
	}, []);

	return (
    <div className="h-full">
      <Chart type="bar" data={data} options={chartOptions}  />
    </div>
  ); 
}
