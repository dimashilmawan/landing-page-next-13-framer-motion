const Container = ({ children, className, container = "padding" }) => {
  return (
    <div
      className={`container mx-auto max-w-[96rem] px-24 xl:px-20 lg:px-16 md:px-12 sm:px-8 xs:px-4 ${className} `}
    >
      {children}
    </div>
  );
};

export default Container;

export const ContainerModal = ({ children, className }) => {
  return (
    <div
      className={`mx-auto w-[calc(100%_-_12rem)] px-24 xl:w-[calc(100%_-_10rem)] xl:px-20 lg:w-[calc(100%_-_8rem)] lg:px-16 md:w-[calc(100%_-_6rem)] md:px-12 sm:w-[calc(100%_-_4rem)] sm:px-8 xs:w-[calc(100%_-_2rem)] xs:px-4 ${className} `}
    >
      {children}
    </div>
  );
};
