LIB 		= lib
SRCDIR 		= src
LOGIC_DIR	= src/logic
UI_DIR		= src/ui
FACTDIR		= factories
TESTDIR 	= tests
UTILDIR		= util
BINDIR 		= bin
UI_PACKAGE 	= luckyDivisor.doc
LOGIC_PACKAGE = games.ttt.logic
DOCDIR 		= doc

JUNIT 		= $(LIB)/junit-4.12.jar:$(LIB)/hamcrest-core-1.3.jar

JAVAC 		= javac
#JFLAGS 	= -g -d $(BINDIR) -cp $(BINDIR):$(JUNIT)
JFLAGS 		= -g -Xlint -d $(BINDIR)

ifdef SYSTEMROOT
    RM = del /Q
    #FixPath = $(subst /,\,$1)
else
    ifeq ($(shell uname), Linux)
        RM = rm -rf
        #FixPath = $1
    endif
endif

.SUFFIXES: .java.class

.java.class:
	$(JAVAC)  $(JFLAGS)  $<

default:
	$(JAVAC) -cp $(BINDIR) $(JFLAGS) $(SRCDIR)/APIGenerator.java

utilities:
	$(JAVAC) -cp $(BINDIR) $(JFLAGS) $(UTILDIR)/*.java

currentSource: clean
	$(JAVAC) $(JFLAGS) $(SRCDIR)/Dictionary.java

allSources: clean
	$(JAVAC) $(JFLAGS) $(SRCDIR)/*.java

all: clean logic ui

logic: clean
	$(JAVAC) $(JFLAGS) $(LOGIC_DIR)/*.java

ui:
	$(JAVAC) $(JFLAGS) $(UI_DIR)/*.java

allFactories:
	$(JAVAC) -cp $(BINDIR) $(JFLAGS) $(FACTDIR)/*.java
	
currentTest: allSources allFactories
	$(JAVAC) -cp $(LIB)/junit-4.12.jar:$(BINDIR) $(JFLAGS) $(TESTDIR)/Point2DTests.java

runCurrentTest:
	java -cp $(LIB)/junit-4.12.jar:$(LIB)/hamcrest-core-1.3.jar:$(BINDIR) org.junit.runner.JUnitCore $(LOGIC_PACKAGE).$(TESTDIR).Point2DTests

allTests: utilities allSources allFactories
	$(JAVAC) -cp $(LIB)/junit-4.12.jar:$(BINDIR) -d $(BINDIR) $(TESTDIR)/*.java

runAllTest:
	java -cp $(LIB)/junit-4.12.jar:$(LIB)/hamcrest-core-1.3.jar:$(BINDIR) org.junit.runner.JUnitCore $(LOGIC_PACKAGE).$(TESTDIR).CurvesInterceptionFinderTests
	java -cp $(LIB)/junit-4.12.jar:$(LIB)/hamcrest-core-1.3.jar:$(BINDIR) org.junit.runner.JUnitCore $(LOGIC_PACKAGE).$(TESTDIR).Line2DTests
	java -cp $(LIB)/junit-4.12.jar:$(LIB)/hamcrest-core-1.3.jar:$(BINDIR) org.junit.runner.JUnitCore $(LOGIC_PACKAGE).$(TESTDIR).Point2DTests

clean:
	$(RM) $(BINDIR)/*