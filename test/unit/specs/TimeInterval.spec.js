
import { Schedule, TimeInterval } from 'src/lib/schedule';

describe('TimeInterval', () => {
  it('create a time interval', () => {
    var t = new TimeInterval();
    expect(t.start).equal(0);
    expect(t.end).equal(0);
    expect(t.length).equal(0);

    t = new TimeInterval(100);
    expect(t.start).equal(0);
    expect(t.end).equal(100);
    expect(t.length).equal(100);

    t = new TimeInterval(200,500);
    expect(t.start).equal(200);
    expect(t.end).equal(500);
    expect(t.length).equal(300);

    t = new TimeInterval({
      start: 300,
      end: 500
    });
    expect(t.start).equal(300);
    expect(t.end).equal(500);
    expect(t.length).equal(200);

    expect(()=>new TimeInterval(500, 300)).throw();
  });
  it('shift correctly', () => {
    var t = new TimeInterval(100, 200);
    t.shift(3000);
    expect(t.start).equal(3100);
    expect(t.end).equal(3200);
    expect(t.length).equal(100);
  });
  it('compare correctly', ()=>{
    var t1 = new TimeInterval(1000);
    var t2 = new TimeInterval(0,1000);
    var t3 = new TimeInterval();
    t3.start = 0;
    t3.end = 1000;
    expect(t1.equal(t2)).equal(true);
    expect(t2.equal(t3)).equal(true);
    expect(t3.equal(t1)).equal(true);
  });
  it('combine overlapped interval correctly', ()=>{
    var t1, t2, t3;

    //case 1
    t1 = new TimeInterval(0, 200);
    t2 = new TimeInterval(100, 300);
    t3 = t1.combine(t2);
    expect(t3.length).equal(1);
    t3 = t3[0];
    expect(t3.start).equal(0);
    expect(t3.end).equal(300);

    //case 2
    t1 = new TimeInterval(100, 200);
    t2 = new TimeInterval(150, 300);
    t3 = t1.combine(t2);
    expect(t3.length).equal(1);
    t3 = t3[0];
    expect(t3.start).equal(100);
    expect(t3.end).equal(300);

    //case 3
    t1 = new TimeInterval(100, 200);
    t2 = new TimeInterval(50, 300);
    t3 = t1.combine(t2);
    expect(t3.length).equal(1);
    t3 = t3[0];
    expect(t3.start).equal(50);
    expect(t3.end).equal(300);

    //case 4
    t1 = new TimeInterval(100, 1000);
    t2 = new TimeInterval(150, 300);
    t3 = t1.combine(t2);
    expect(t3.length).equal(1);
    t3 = t3[0];
    expect(t3.start).equal(100);
    expect(t3.end).equal(1000);
  });
  it('combine separated intervals correctly', ()=>{
    var t1, t2, t3;

    //case 1
    t1 = new TimeInterval(0, 100);
    t2 = new TimeInterval(100, 300);
    t3 = t1.combine(t2);
    expect(t3.length).equal(1);
    t3 = t3[0];
    expect(t3.start).equal(0);
    expect(t3.end).equal(300);

    //case 2
    t1 = new TimeInterval(0, 100);
    t2 = new TimeInterval(101, 300);
    t3 = t1.combine(t2);
    expect(t3.length).equal(2);

    //case 2
    t1 = new TimeInterval(500, 3000);
    t2 = new TimeInterval(0, 100);
    t3 = t1.combine(t2);
    expect(t3.length).equal(2);
  });
  it('check time overlap', ()=>{
    var t1, t2, t3;

    //case 1
    t1 = new TimeInterval(0, 100);
    t2 = new TimeInterval(100, 300);
    t3 = new TimeInterval(50, 300);

    expect(t1.overlap(t2)).equal(false);
    expect(t3.overlap(t2)).equal(true);
    expect(t1.overlap(t3)).equal(true);
  });
});
