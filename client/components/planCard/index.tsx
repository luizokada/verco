import { Card, Grid, Text, Divider, Button, Row } from "@nextui-org/react";

export default function PlanCard(props) {
  const { title, about, price } = props;
  return (
    <Grid xs={3}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <h3 b>{title}</h3>
        </Card.Header>
        <Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>{about}</Text>
        </Card.Body>
        <Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text b>R$ {price}</Text>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Row justify="center">
            <Button
              onClick={() =>
                window.alert(
                  "Compra Online Indisponível no Momento. Ligue para: 2121-2121"
                )
              }
              css={{
                background: "$brown",
                color: "white",
                fontSize: "$title",
                "&:hover": {
                  background: "$brown",
                  color: "white",
                },
              }}
              auto
              light
            >
              Seja parceiro
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
