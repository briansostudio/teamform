
import { Schedule, TimeInterval } from 'src/lib/schedule';

describe('Schedule', () => {

  it('create a Schedule', ()=>{
    var s = new Schedule();
    expect(typeof s.intervals).equal('object');
    s = new Schedule([
      new TimeInterval(100),
      new TimeInterval(200),
      new TimeInterval(300),
      new TimeInterval(400),
    ]);
    expect(s.intervals.length).equal(4);
  });
  it('calculate total time in a schedule', ()=>{
    var s = new Schedule([
      new TimeInterval(100),
      new TimeInterval(200),
      new TimeInterval(300),
      new TimeInterval(400),
    ]);
    expect(s.totalTime).equal(400);

    s = new Schedule([
      new TimeInterval(100, 400),//300
      new TimeInterval(1200, 1500),//300
      new TimeInterval(300),//300 - 200
      new TimeInterval(400, 600),//200
    ]);
    expect(s.totalTime).equal(900);
  });
  it('combine two schedules', ()=>{
    var s1 = new Schedule([
      new TimeInterval(100),
      new TimeInterval(200),
      new TimeInterval(300),
      new TimeInterval(400),
    ]);

    var s2 = new Schedule([
      new TimeInterval(100),
      new TimeInterval(200),
      new TimeInterval(300),
      new TimeInterval(400),
    ]);

    var s3 = s1.combine(s2);
    expect(s1.intervals.length).equal(4);
    expect(s2.intervals.length).equal(4);
    expect(s3.intervals.length).equal(8);
  });
  it('resolve a schedule', ()=>{
    //resolve is combining all overlapped time interval
    var s = new Schedule([
      new TimeInterval(100),
      new TimeInterval(200),
      new TimeInterval(300),
      new TimeInterval(400),
    ]);
    var result = s.resolve();
    expect(result.intervals.length).equal(1);
    expect(result.intervals[0].start).equal(0);
    expect(result.intervals[0].end).equal(400);

    s = new Schedule([
      new TimeInterval(100, 400),//300
      new TimeInterval(1200, 1500),//300
      new TimeInterval(300),//300 - 200
      new TimeInterval(400, 600),//200
      new TimeInterval(1400, 1700)
    ]);
    result = s.resolve();
    expect(result.intervals.length).equal(2);
    var intervalSorted = result.intervals.sort((a,b)=>a.start - b.start);
    expect(intervalSorted[0].start).equal(0);
    expect(intervalSorted[0].end).equal(600);
    expect(intervalSorted[1].start).equal(1200);
    expect(intervalSorted[1].end).equal(1700);
  });
  it('project a schedule', ()=>{
    //project return a new 2d array of time intervals that are not overlapped
    //the first dimension represent the day of week, 0 for sunday, 1 for monday and so on..
    //the second dimension is the list of time intervals within that day
    //the time interval have an extra property count which indicates how many overlapping of this interval
    //this is used for rendering

    // other notes:
    //the time intervals returned by this function have only three property:
    // start, end, count

    var s = new Schedule([
      new TimeInterval(100),
      new TimeInterval(200),
      new TimeInterval(300),
      new TimeInterval(250,350)
    ]);
    var result = s.project();
    expect(result.length).equal(7);
    var sunday = result[0];
    expect(sunday.length).equal(5);
    expect(sunday[0].start).equal(0);
    expect(sunday[0].end).equal(100);
    expect(sunday[0].count).equal(3);

    expect(sunday[1].start).equal(100);
    expect(sunday[1].end).equal(200);
    expect(sunday[1].count).equal(2);

    expect(sunday[2].start).equal(200);
    expect(sunday[2].end).equal(250);
    expect(sunday[2].count).equal(1);

    expect(sunday[3].start).equal(250);
    expect(sunday[3].end).equal(300);
    expect(sunday[3].count).equal(2);

    expect(sunday[4].start).equal(300);
    expect(sunday[4].end).equal(350);
    expect(sunday[4].count).equal(1);
  });
});
