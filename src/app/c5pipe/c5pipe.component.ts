import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c5pipe',
  templateUrl: './c5pipe.component.html',
  styleUrls: ['./c5pipe.component.css']
})
export class C5pipeComponent implements OnInit {

  constructor() { }
  username:string="rahul bhatnagar";
  limitRow:number=2;
    emp: any[] = [
      {
        EMPNO: 7369,
        ENAME: 'SMITH',
        JOB: 'CLERK',
        MGR: 7902,
        HIREDATE: new Date('12/17/1980'), //mm//dd///yyyy
        SAL: 800,
        COMM: null,
        DEPTNO: 20
      },
      {
        EMPNO: 7499,
        ENAME: 'ALLEN',
        JOB: 'SALESMAN',
        MGR: 7698,
        HIREDATE: new Date('02/20/1981'),
        SAL: 1600,
        COMM: 300,
        DEPTNO: 30
      },
      {
        EMPNO: 7521,
        ENAME: 'WARD',
        JOB: 'SALESMAN',
        MGR: 7698,
        HIREDATE: new Date('02/22/1981'),
        SAL: 1250,
        COMM: 500,
        DEPTNO: 30
      },
      {
        EMPNO: 7566,
        ENAME: 'JONES',
        JOB: 'MANAGER',
        MGR: 7839,
        HIREDATE: new Date('04/02/1981'),
        SAL: 2975,
        COMM: null,
        DEPTNO: 20
      },
      {
        EMPNO: 7654,
        ENAME: 'MARTIN',
        JOB: 'SALESMAN',
        MGR: 7698,
        HIREDATE: new Date('09/28/1981'),
        SAL: 1250,
        COMM: 500,
        DEPTNO: 30
      },
      {
        EMPNO: 7698,
        ENAME: 'BLAKE',
        JOB: 'MANAGER',
        MGR: 7839,
        HIREDATE: new Date('05/01/1981'),
        SAL: 2650,
        COMM: null,
        DEPTNO: 30
      },
      {
        EMPNO: 7782,
        ENAME: 'CLARK',
        JOB: 'MANAGER',
        MGR: 7839,
        HIREDATE: new Date('06/09/1981'),
        SAL: 2450,
        COMM: null,
        DEPTNO: 10
      },
      {
        EMPNO: 7788,
        ENAME: 'SCOTT',
        JOB: 'ANALYST',
        MGR: 7566,
        HIREDATE: new Date('04/19/1987'),
        SAL: 3000,
        COMM: null,
        DEPTNO: 20
      },
      {
        EMPNO: 7839,
        ENAME: 'KING',
        JOB: 'PRESIDENT',
        MGR: null,
        HIREDATE: new Date('11/17/1981'),
        SAL: 5000,
        COMM: null,
        DEPTNO: 10
      },
      {
        EMPNO: 7844,
        ENAME: 'TURNER',
        JOB: 'SALESMAN',
        MGR: 7698,
        HIREDATE: new Date('09/08/1981'),
        SAL: 1500,
        COMM: 0,
        DEPTNO: 30
      },
      {
        EMPNO: 7876,
        ENAME: 'ADAMS',
        JOB: 'CLERK',
        MGR: 7788,
        HIREDATE: new Date('05/23/1987'),
        SAL: 1100,
        COMM: null,
        DEPTNO: 20
      },
      {
        EMPNO: 7900,
        ENAME: 'JAMES',
        JOB: 'CLERK',
        MGR: 7698,
        HIREDATE: new Date('12/03/1981'),
        SAL: 950,
        COMM: null,
        DEPTNO: 30
      },
      {
        EMPNO: 7902,
        ENAME: 'FORD',
        JOB: 'ANALYST',
        MGR: 7566,
        HIREDATE: new Date('12/03/1981'),
        SAL: 3000,
        COMM: null,
        DEPTNO: 20
      },
      {
        EMPNO: 7934,
        ENAME: 'MILLER',
        JOB: 'CLERK',
        MGR: 7782,
        HIREDATE: new Date('01/23/1982'),
        SAL: 1300,
        COMM: null,
        DEPTNO: 10
      }
    ];

  ngOnInit() {
  }

}
