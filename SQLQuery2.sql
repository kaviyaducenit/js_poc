select * from programmer
select *from software
select * from studies
--1.  Who is the highest paid C Programmer?
select top 1 pname from (select pname ,salary from programmer  where prof1='c' or prof2='c') as mytable order by salary desc
select top 1 pname from programmer where prof1='c' or prof2='c' order by salary desc
--2.  Who is the highest paid female COBOL Programmer?
select top 1 pname from programmer where sex='F'and prof1='cobol'or prof2='cobol' order by salary desc
--3.  Display the names of the highest paid programmer for each language(prof1)
select pname from(
select pname,row_number() over(partition by prof1 order by salary desc)as x from programmer )as tablename
where x=1
--4.  Who is the least experienced programmer?
select top 1 pname from (select pname,datediff(year,doj,getdate()) as ages from programmer )as age order by ages asc
select top 1 pname ,doj from programmer order by doj desc
--5  Who is the most experienced programmer?
select top 1 pname,doj from programmer order by doj asc
--6.  Which language is known only by one programmer?
select * from programmer
select name from(select name,count(name) as dd from (select prof1 as name from programmer union all select  prof2 as name from programmer)as d group by name)as u where dd=1
--7.  Who is the above programmer?
select *from programmer 
where prof1 in (select name from(select name,count(name) as dd from (select prof1 as name from programmer union all select  prof2 as name from programmer)as d group by name)as u where dd=1)
or prof2 in (select name from(select name,count(name) as dd from (select prof1 as name from programmer union all select  prof2 as name from programmer)as d group by name)as u where dd=1)
--8.  Who is the youngest programmer knowing DBASE?
select top 1 pname  from(select * from programmer where prof1='dbase' or prof2='dbase')as dd order by doj desc
--9.  Which female programmer earns more than 3000/- but does not know C, C++ ,Oracle or Dbase?
select * from programmer where sex='f' and salary>3000 and prof1 not in('c','c++','oracle','dbase')