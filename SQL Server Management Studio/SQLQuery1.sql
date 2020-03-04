--Find out the selling cost average for packages developed in Pascal.
select * from software
select avg(scost) from software where dev_in='pascal'
--Display the names and ages of all programmers.
select * from programmer
select pname,datediff(yy,doj,getdate()) as age from programmer
-- Display the names of those who have done the DAP course.
select * from studies
select pname from studies where course='dap'
--What is the highest number of copies sold by a package?
select max(sold) from software
-- Display the names and date of birth of all programmers born in January.
select pname from programmer where datepart(month, dob)=01
--Display the lowest course fee.
select min(ccost) from studies 
--How many programmers have done the PGDCA course?
select count(*) from studies where course='pgdca'
--How much revenue has been earned thru the sale of packages developed in C ?
select * from software
select sum((dcost-scost)*sold) as revenue, (dcost-scost)*sold as Irevenue from software  where dev_in='c'
--Display the details of software developed by Ramesh.
select pname,title,dev_in,scost,dcost,sold from software where pname='ramesh'
--How many programmers studied at SABHARI?
select * from studies
select count(*) from studies where splace like'%sabhari'
--Display the details of packages whose sales crossed the 2000 mark.
select * from software where scost>2000
--12 Find out the number of copies which should be sold in order to recover the development cost of each package.
select ceiling(dcost/scost)as copies from  software 
--13 Display the details of packages for which development cost has been  recovered?
select * from software where (scost*sold)>dcost 
-- What is the price of costliest software developed in BASIC?
select max(scost) from software where dev_in='basic'
--How many packages were developed in DBASE?
select count(*) from software where dev_in='dbase'
--How many programmers studied in PRAGATHI?
select * from studies
select count(*) from studies where splace like '%pragathi'
--How many programmers paid 5000 to 10000 for their course?
select count(ccost) from studies where ccost between 5000 and 10000
--What is the average course fee?
 select avg(ccost) from studies
 --Display the details of programmers knowing C?
 select * from programmer
 select * from software
 select * from programmer where prof1='c' or prof2='c'
 --How many programmers know either COBOL or PASCAL?
  select count( * )from programmer where prof1 in ('cobol','pascal') or prof2 in('cobol','pascal')
  -- How many programmers know either PASCAL OR C?
  select count( * )from programmer where prof1 in ('c','pascal') or prof2 in('c','pascal')
  --How old is the oldest male programmer?
  select max(datediff(yy,dob,getdate())) as age from programmer where sex='m'
  --Calculate the experience in years for each programmers and display along with the names in descending order?
  select pname,datediff(yy,doj,getdate()) as experience  from programmer order by pname desc
  --What is the average age of female programmers?
  select avg(datediff(yy,dob,getdate())) from programmer where sex='f'
  --Who are the programmers who celebrate their birthdays during current month?
  select pname from programmer where month(dob)=02
  --How many female programmers are there?
  select count(*) from programmer where sex='f'
  --What are the Languages known by the male programmers?
  select distinct(prof1) from programmer  where sex='m' union   select distinct(prof2) from programmer  where sex='m'
--What is the average salary?
select avg(salary) from programmer
--How many people draw 2000 to 4000?
select count(*) from programmer where salary >=2000 and salary <=4000
--Display the details of those who don't know CLIPPER, COBOL or PASCAL
select * from programmer where prof1 not in('clipper','cobol','pascal') 
--31 Display the cost of package developed by each programmer.
select sum(dcost) from software group by pname;
--32 Display sales values of packages developed by each programmer.
select sum(scost*sold) from software group by pname;
--33 Display number of packages sold by each programmer.
select  pname,sum(sold) from software group by pname ;
--34 Display the sale cost of the packages developed by each programmer language -wise?
select sum(scost) from software group by dev_in;
--35 Display each language name with average development cost, average selling cost and average price per copy.
select dev_in ,avg(scost),avg(dcost),avg(dcost/sold) from software group by dev_in;
--Display each programmers name, costliest & cheapest package developed.
select  pname ,min(dcost) as minimum,max(dcost) as maximum from software group by pname

--Display each institute name with number of course and course fee average.
select splace ,count(course),avg(ccost) from studies group by splace;
--Display each institute name width number of students.
select splace ,count (splace) as counttt from studies group by splace;
-- Display the names of male and female programmers.
select distinct pname ,sex from programmer order by sex


--- Display the programmers name and their packages.
select pname ,salary from programmer ;
--- Display the number of packages in each language except C and C++
select count(prof1),count(prof2)  from programmer where prof1 not in('c','c++');
-- Display the number of packages in each language for which development cost is less than 1000.
select dev_in ,count(dev_in) from software where dcost<1000 group by dev_in;
-- Display the average differences between scost and dcost for each language.
select avg(scost-dcost) from  software group by dev_in;
--Display the total scost, dcost and the amount to be recovered for each programmer for those whose dcost has not yet been recovered.
select sum(scost) as total_scost,sum(dcost) as total_dcsot,
sum(dcost-(scost*sold)) as amount_to_be_rec from software
group by pname having sum(dcost)>sum(scost*sold)


-- Display the highest, lowest and average salaries for those earning more  than 2000.
select max(salary),avg(salary), min(salary) from programmer where salary>2000;
-- Display the second highest salary for programmer

select top 1 salary from (select distinct top 2 salary from programmer order  by salary desc) as mytable order by salary asc
