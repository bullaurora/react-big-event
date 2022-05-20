import React, { useEffect} from "react";
import * as echarts from "echarts";

function Dashboard() {
  useEffect(() => {
    var oChart = echarts.init(document.getElementById("curve_show"));
    var aList_all = [
      { count: 36, date: "2019-04-13" },
      { count: 52, date: "2019-04-14" },
      { count: 78, date: "2019-04-15" },
      { count: 85, date: "2019-04-16" },
      { count: 65, date: "2019-04-17" },
      { count: 72, date: "2019-04-18" },
      { count: 88, date: "2019-04-19" },
      { count: 64, date: "2019-04-20" },
      { count: 72, date: "2019-04-21" },
      { count: 90, date: "2019-04-22" },
      { count: 96, date: "2019-04-23" },
      { count: 100, date: "2019-04-24" },
      { count: 102, date: "2019-04-25" },
      { count: 110, date: "2019-04-26" },
      { count: 123, date: "2019-04-27" },
      { count: 100, date: "2019-04-28" },
      { count: 132, date: "2019-04-29" },
      { count: 146, date: "2019-04-30" },
      { count: 200, date: "2019-05-01" },
      { count: 180, date: "2019-05-02" },
      { count: 163, date: "2019-05-03" },
      { count: 110, date: "2019-05-04" },
      { count: 80, date: "2019-05-05" },
      { count: 82, date: "2019-05-06" },
      { count: 70, date: "2019-05-07" },
      { count: 65, date: "2019-05-08" },
      { count: 54, date: "2019-05-09" },
      { count: 40, date: "2019-05-10" },
      { count: 45, date: "2019-05-11" },
      { count: 38, date: "2019-05-12" },
    ];

    let aCount = [];
    let aDate = [];

    for (var i = 0; i < aList_all.length; i++) {
      aCount.push(aList_all[i].count);
      aDate.push(aList_all[i].date);
    }

    var chartopt = {
      title: {
        text: "月新增文章数",
        left: "center",
        top: "10",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["新增文章"],
        top: "40",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          name: "日",
          type: "category",
          boundaryGap: false,
          data: aDate,
        },
      ],
      yAxis: [
        {
          name: "月新增文章数",
          type: "value",
        },
      ],
      series: [
        {
          name: "新增文章",
          type: "line",
          smooth: true,
          itemStyle: {
            normal: { areaStyle: { type: "default" }, color: "#f80" },
            lineStyle: { color: "#f80" },
          },
          data: aCount,
        },
      ],
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255,136,0,0.39)",
            },
            {
              offset: 0.34,
              color: "rgba(255,180,0,0.25)",
            },
            {
              offset: 1,
              color: "rgba(255,222,0,0.00)",
            },
          ]),
        },
      },
      grid: {
        show: true,
        x: 50,
        x2: 50,
        y: 80,
        height: 220,
      },
    };

    oChart.setOption(chartopt);

    var oPie = echarts.init(document.getElementById("pie_show"));
    var oPieopt = {
      title: {
        top: 10,
        text: "分类文章数量比",
        x: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      color: ["#5885e8", "#13cfd5", "#00ce68", "#ff9565"],
      legend: {
        x: "center",
        top: 65,
        data: ["奇趣事", "会生活", "爱旅行", "趣美味"],
      },
      toolbox: {
        show: true,
        x: "center",
        top: 35,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ["pie", "funnel"],
            option: {
              funnel: {
                x: "25%",
                width: "50%",
                funnelAlign: "left",
                max: 1548,
              },
            },
          },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["45%", "60%"],
          center: ["50%", "65%"],
          data: [
            { value: 300, name: "奇趣事" },
            { value: 100, name: "会生活" },
            { value: 260, name: "爱旅行" },
            { value: 180, name: "趣美味" },
          ],
        },
      ],
    };
    oPie.setOption(oPieopt);

    var oColumn = echarts.init(document.getElementById("column_show"));
    var oColumnopt = {
      title: {
        text: "文章访问量",
        left: "center",
        top: "10",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["奇趣事", "会生活", "爱旅行", "趣美味"],
        top: "40",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月"],
        },
      ],
      yAxis: [
        {
          name: "访问量",
          type: "value",
        },
      ],
      series: [
        {
          name: "奇趣事",
          type: "bar",
          barWidth: 20,
          itemStyle: {
            normal: { areaStyle: { type: "default" }, color: "#fd956a" },
          },
          data: [800, 708, 920, 1090, 1200],
        },
        {
          name: "会生活",
          type: "bar",
          barWidth: 20,
          itemStyle: {
            normal: { areaStyle: { type: "default" }, color: "#2bb6db" },
          },
          data: [400, 468, 520, 690, 800],
        },
        {
          name: "爱旅行",
          type: "bar",
          barWidth: 20,
          itemStyle: {
            normal: { areaStyle: { type: "default" }, color: "#13cfd5" },
          },
          data: [500, 668, 520, 790, 900],
        },
        {
          name: "趣美味",
          type: "bar",
          barWidth: 20,
          itemStyle: {
            normal: { areaStyle: { type: "default" }, color: "#00ce68" },
          },
          data: [600, 508, 720, 890, 1000],
        },
      ],
      grid: {
        show: true,
        x: 50,
        x2: 30,
        y: 80,
        height: 260,
      },
      dataZoom: [
        //给x轴设置滚动条
        {
          start: 0, //默认为0
          end: 100 - 1000 / 31, //默认为100
          type: "slider",
          show: true,
          xAxisIndex: [0],
          handleSize: 0, //滑动条的 左右2个滑动条的大小
          height: 8, //组件高度
          left: 45, //左边的距离
          right: 50, //右边的距离
          bottom: 26, //右边的距离
          handleColor: "#ddd", //h滑动图标的颜色
          handleStyle: {
            borderColor: "#cacaca",
            borderWidth: "1",
            shadowBlur: 2,
            background: "#ddd",
            shadowColor: "#ddd",
          },
        },
      ],
    };
    oColumn.setOption(oColumnopt);
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row spannel_list">
          <div className="col-sm-3 col-xs-6">
            <div className="spannel">
              <em>10015</em>
              <span>篇</span>
              <b>总文章数</b>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="spannel scolor01">
              <em>123</em>
              <span>篇</span>
              <b>日新增文章数</b>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="spannel scolor02">
              <em>35</em>
              <span>条</span>
              <b>评论总数</b>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="spannel scolor03">
              <em>123</em>
              <span>条</span>
              <b>日新增评论数</b>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row curve-pie">
          <div className="col-lg-8 col-md-8">
            <div className="gragh_pannel" id="curve_show"></div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="gragh_pannel" id="pie_show"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="column_pannel" id="column_show"></div>
      </div>
    </div>
  );
}

export default Dashboard;
